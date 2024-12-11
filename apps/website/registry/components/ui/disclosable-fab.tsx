"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, LucideIcon } from "lucide-react";

export interface MenuItemProps {
  title: string;
  description: string;
  icon: LucideIcon;
  onClick?: () => void;
}

interface DisclosableFabProps {
  menuItems: MenuItemProps[];
  width?: number;
  height?: number;
  backgroundColor?: string;
  darkBackgroundColor?: string;
}

export default function DisclosableFab({
  menuItems,
  width = 320,
  height = 280,
  backgroundColor = "bg-white",
  darkBackgroundColor = "dark:bg-[#1f1f1f]",
}: DisclosableFabProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative h-[400px] w-full flex items-center justify-center bg-background dark:bg-background">
      <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        className="relative"
      >
        <motion.div
          variants={{
            open: {
              width,
              height,
              borderRadius: 16,
            },
            closed: {
              width: 56,
              height: 56,
              borderRadius: 28,
            },
          }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          className={`overflow-hidden ${backgroundColor} ${darkBackgroundColor} shadow-lg border border-[#e5e5e5] dark:border-[#404040]`}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key="content"
              initial="closed"
              animate={isOpen ? "open" : "closed"}
              exit="closed"
              variants={{
                open: {
                  opacity: 1,
                  transition: { staggerChildren: 0.07, delayChildren: 0.2 },
                },
                closed: {
                  opacity: 0,
                  transition: { staggerChildren: 0.05, staggerDirection: -1 },
                },
              }}
              className={`absolute inset-0 ${isOpen ? "p-4 space-y-2" : ""}`}
            >
              {isOpen &&
                menuItems.map((item) => (
                  <motion.button
                    key={item.title}
                    variants={{
                      open: { opacity: 1, y: 0 },
                      closed: { opacity: 0, y: 20 },
                    }}
                    onClick={item.onClick}
                    className="flex w-full items-center space-x-3 rounded-lg p-2 transition-colors hover:bg-[#f7f7f7] dark:hover:bg-[#333333]"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#f7f7f7] dark:bg-[#333333]">
                      <item.icon className="h-5 w-5 text-[#525252] dark:text-[#d1d1d1]" />
                    </div>
                    <div className="flex-1 text-left">
                      <h3 className="text-sm font-medium text-[#171717] dark:text-[#f7f7f7]">
                        {item.title}
                      </h3>
                      <p className="text-xs text-[#737373] dark:text-[#a3a3a3]">
                        {item.description}
                      </p>
                    </div>
                  </motion.button>
                ))}
            </motion.div>
          </AnimatePresence>

          <motion.button
            className="absolute top-0 right-0 flex items-center justify-center w-14 h-14 text-[#171717] dark:text-[#f7f7f7]"
            onClick={() => setIsOpen(!isOpen)}
            animate={isOpen ? "open" : "closed"}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <motion.div
              variants={{
                open: { rotate: 135, y: 2 },
                closed: { rotate: 0, y: 0 },
              }}
              transition={{ duration: 0.2 }}
            >
              <Plus className="h-6 w-6" />
            </motion.div>
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
}
