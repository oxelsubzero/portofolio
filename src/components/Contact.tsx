import { sendMessage } from "@/app/action";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
const ContactFormShema = z.object({
  name: z.string().min(3, { message: "Please enter your name" }),
  email: z
    .string()
    .min(1, { message: "please enter your email so I can contact you" })
    .email("THis is not a valid email."),
  message: z
    .string()
    .min(15, { message: "Please give me more detail about your project" }),
});

const Contact = () => {
  const form = useForm<z.infer<typeof ContactFormShema>>({
    resolver: zodResolver(ContactFormShema),
  });
  const { toast } = useToast();
  async function onSubmit(values: z.infer<typeof ContactFormShema>) {
    const formData = {
      name: values.name,
      email: values.email,
      message: values.message,
    };
    const result = await sendMessage(formData);

    if (result) {
      toast({
        title: "I recieved the message ",
        description: "I'll be back to you soon",
      });
    } else {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
      });
    }
  }

  return (
    <div className="mt-12">
      <p className="text-3xl font-bold">Ready to Get Started?</p>
      <p className="text-neutral-400 mt-8">
        Let&apos;s discuss your project and how
        <br /> I can help you achieve your goals within your budget.
        <br /> Send me a message and I&apos;ll be back within 24 hours
      </p>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="mt-16 w-full border border-neutral-500 rounded-xl md:p-16 p-6 space-y-8"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-4">
                <FormLabel className="text-white">Name</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    className="bg-[#121212] px-4 border border-neutral-500 rounded-lg h-12"
                  />
                </FormControl>

                <FormMessage className="text-white" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-4">
                <FormLabel className="text-white">Email</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    className="bg-[#121212] px-4 border border-neutral-500 rounded-lg h-12"
                  />
                </FormControl>

                <FormMessage className="text-white" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-4">
                <FormLabel className="text-white">Message</FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    className="bg-[#121212] p-4 border border-neutral-500 rounded-lg h-36"
                  />
                </FormControl>

                <FormMessage className="text-white" />
              </FormItem>
            )}
          />

          <motion.button
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{ scale: 0.6 }}
            type="submit"
            className="border-2 border-neutral-500   rounded-lg text-white p-1 px-4  h-12"
          >
            send message !
          </motion.button>
        </form>
      </Form>
    </div>
  );
};

export default Contact;
