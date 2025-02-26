import React, { useState } from "react";
import { motion } from "framer-motion";
import PageHeader from "./PageHeader"; 

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQData {
  [key: string]: FAQItem[];
}

export const FAQPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("Components");
  const [openQuestion, setOpenQuestion] = useState<string>(
    "What are the UI components you offer?",
  );

  const faqData: FAQData = {
    Components: [
      {
        question: "What are the UI components you offer?",
        answer:
          "We offer a wide range of pre-built UI components built with Tailwind CSS and Framer Motion, including buttons, cards, forms, navigation menus, and more.",
      },
      {
        question: "How can I use these components in my project?",
        answer:
          "Simply copy and paste the code for the components you need into your project, then customize the styles and functionality to match your design.",
      },
      {
        question: "Are the components responsive and mobile-friendly?",
        answer:
          "Yes, our components are designed to be fully responsive and optimized for both desktop and mobile devices.",
      },
      {
        question: "Can I modify the components to fit my branding?",
        answer:
          "Absolutely! The components are highly customizable, allowing you to easily change colors, fonts, and other styles to match your brand identity.",
      },
      {
        question: "What types of templates do you offer?",
        answer:
          "We offer a diverse collection of modern templates including landing pages, dashboards, e-commerce layouts, portfolios, and blog templates. All our templates are built with Next.js, Tailwind CSS, and TypeScript for optimal performance and developer experience.",
      },
      {
        question: "Are your templates responsive and mobile-friendly?",
        answer:
          "Yes, all our templates are fully responsive and thoroughly tested across different devices and screen sizes. They automatically adapt to provide the best user experience on desktop, tablet, and mobile devices.",
      },
      {
        question: "Can I customize the templates?",
        answer:
          "Absolutely! Our templates are built with customization in mind. You can easily modify colors, typography, layouts, and components using Tailwind CSS classes. The TypeScript codebase is well-structured and documented for easy modifications.",
      },
      {
        question: "Do the templates come with documentation?",
        answer:
          "Yes, each template includes comprehensive documentation covering installation, configuration, customization, and deployment. We also provide code comments and TypeScript types for better development experience.",
      },
    ],
    Tools: [
      {
        question: "What is the Color Generator tool?",
        answer:
          "Our Color Generator is a powerful tool that helps you create and manage color palettes for your web projects. It generates harmonious color combinations and provides the corresponding Tailwind CSS classes and hex codes.",
      },
      {
        question: "How do I use the Color Generator?",
        answer:
          "Simply select your base color, and the tool will automatically generate complementary, analogous, or monochromatic color schemes. You can adjust brightness, saturation, and hue to fine-tune your palette.",
      },
      {
        question: "Can I export the generated colors?",
        answer:
          "Yes, you can export colors in multiple formats including Tailwind CSS classes, hex codes, RGB values, and HSL values. You can also copy individual colors or the entire palette with one click.",
      },
      {
        question: "Does it support dark mode colors?",
        answer:
          "Yes, our Color Generator automatically suggests dark mode variants for your colors, ensuring your palette works well in both light and dark themes.",
      },

      {
        question: "What can I create with the Gradient Generator?",
        answer:
          "Our Gradient Generator helps you create beautiful linear and radial gradients. You can specify multiple color stops, adjust angles, and get instant previews with corresponding Tailwind CSS classes.",
      },
      {
        question: "How do I customize gradients?",
        answer:
          "You can add multiple color stops, adjust their positions, change gradient direction, and modify opacity. The tool provides real-time preview and generates the exact CSS code you need.",
      },
      {
        question: "Can I save my favorite gradients?",
        answer:
          "Yes, you can save your favorite gradients to your browser's local storage and access them later. You can also share gradient configurations via URL.",
      },
      {
        question: "Are the gradients compatible with Tailwind CSS?",
        answer:
          "Absolutely! All generated gradients come with ready-to-use Tailwind CSS classes. You can also get the raw CSS if you prefer using standard CSS.",
      },
      {
        question: "What features does the Shadow Generator offer?",
        answer:
          "Our Shadow Generator allows you to create custom box shadows with controls for offset, blur, spread, and color. It supports both outer and inner shadows with real-time preview.",
      },
      {
        question: "How do I create layered shadows?",
        answer:
          "You can add multiple shadow layers with different properties to create complex and realistic shadow effects. Each layer can be individually customized and reordered.",
      },
      {
        question: "Does it support colored shadows?",
        answer:
          "Yes, you can create colored shadows with custom opacity. The tool provides color picker and opacity controls for precise shadow styling.",
      },
      {
        question: "How can I use the generated shadows?",
        answer:
          "The tool provides both Tailwind CSS classes and standard CSS code for your shadows. You can copy the code directly and use it in your projects.",
      },
    ],
    Features: [
      {
        question: "What makes your components unique?",
        answer:
          "Our components are built with modern technologies like Tailwind CSS and Framer Motion, offering advanced features like animations, hover effects, and smooth scrolling.",
      },
      {
        question: "Do you provide documentation and support?",
        answer:
          "Yes, we offer comprehensive documentation and support to help you get started and troubleshoot any issues you may encounter.",
      },
      {
        question: "How often are new components added?",
        answer:
          "We regularly add new components and update existing ones to ensure you always have access to the latest design trends and best practices.",
      },
      {
        question: "Can I use these components in commercial projects?",
        answer:
          "Yes, our components are licensed for commercial use, allowing you to incorporate them into your client projects without any additional fees.",
      },
    ],
    Support: [
      {
        question: "What kind of support do you provide?",
        answer:
          "Our support team is available to assist you with any questions or issues you may have regarding our components, from installation to customization.",
      },
      {
        question: "How can I get in touch with your support team?",
        answer:
          "You can reach our support team via email, live chat, or our support forum, where you can also find answers to frequently asked questions.",
      },
      {
        question: "Do you offer any tutorials or guides?",
        answer:
          "Yes, we provide a variety of tutorials, guides, and code examples to help you get the most out of our components and learn best practices for web development.",
      },
      {
        question: "How quickly can I expect a response from your support team?",
        answer:
          "We strive to respond to all support inquiries within 24 hours, and we prioritize resolving any critical issues as quickly as possible.",
      },
    ],
  };

  return (
    <div className="min-h-screen mt-[20px] mb-36">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-center space-x-1 sm:space-x-5 mb-8 w-fit mx-auto">
          {Object.keys(faqData).map((tab) => (
            <motion.button
              key={tab}
              className={`px-2 py-1 font-bold rounded-md text-sm ${
                activeTab === tab
                  ? "bg-gradient-to-r from-indigo-400 to-blue-400 text-white dark:from-indigo-600 dark:to-blue-600"
                  : "text-black/50 dark:text-white/50"
              }`}
              onClick={() => setActiveTab(tab)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tab}
            </motion.button>
          ))}
        </div>
        <div className="space-y-4 mx-4 lg:mx-0">
          {faqData[activeTab].map((item) => (
            <motion.div
              key={item.question}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="border dark:border-white/20 border-black/20 rounded-lg overflow-hidden"
            >
              <motion.button
                className="w-full text-left p-4 flex justify-between items-center font-bold"
                onClick={() =>
                  setOpenQuestion(
                    openQuestion === item.question ? "" : item.question,
                  )
                }
              >
                <span>{item.question}</span>
                <motion.span
                  animate={{ rotate: openQuestion === item.question ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  +
                </motion.span>
              </motion.button>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: openQuestion === item.question ? "auto" : 0,
                  opacity: openQuestion === item.question ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="p-4 border-t dark:border-white/20 border-black/20 text-black/70 dark:text-white/70">
                  {item.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
