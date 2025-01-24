import { useState } from "react";
import { Send } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import emailjs from '@emailjs/browser';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const templateParams = {
        to_name: "Kay",
        from_name: formData.name,
        message: formData.message,
      };

      await emailjs.send(
          'service_typhwpv',
          'template_3yougsm',
          templateParams,
          'B4uD-h4AoPtIsQXCu'
      );

      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out. I'll get back to you soon!",
      });
      setFormData({ name: "", message: "" });
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
      <section id="contact" className="container mx-auto py-20">
        <h2 className="text-4xl font-bungee text-neon mb-12 text-center flex items-center justify-center gap-4">
          <Send className="w-8 h-8" />
          Contact Me
        </h2>
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
          <div>
            <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full bg-dark/50 border-2 border-magenta focus:border-neon p-4 rounded-lg
            text-white placeholder:text-white/50 transition-all duration-300
            hover:shadow-[0_0_10px_rgba(0,255,221,0.1)]"
            />
          </div>
          <div>
          <textarea
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              rows={5}
              className="w-full bg-dark/50 border-2 border-magenta focus:border-neon p-4 rounded-lg
            text-white placeholder:text-white/50 transition-all duration-300
            hover:shadow-[0_0_10px_rgba(0,255,221,0.1)]"
          />
          </div>
          <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-neon text-dark font-bold py-4 rounded-lg relative overflow-hidden group
          hover:bg-magenta transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span className="relative z-10">{isLoading ? "Sending..." : "Transmit Message"}</span>
            <div className="absolute inset-0 flex flex-wrap opacity-0 group-hover:opacity-30 transition-opacity duration-300">

            </div>
          </button>
        </form>
      </section>
  );
};