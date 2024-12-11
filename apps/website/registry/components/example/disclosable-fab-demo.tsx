"use client";

import React from "react";
import { FileText, Bell, File, Folder } from "lucide-react";
import DisclosableFab from "@/components/ui/disclosable-fab";

export default function DisclosableFabDemo() {
  const handleTaskClick = () => {
    console.log("Task clicked");
    // Add your task creation logic here
  };

  const handleReminderClick = () => {
    console.log("Reminder clicked");
    // Add your reminder creation logic here
  };

  const handleNoteClick = () => {
    console.log("Note clicked");
    // Add your note creation logic here
  };

  const handleProjectClick = () => {
    console.log("Project clicked");
    // Add your project creation logic here
  };

  const menuItems = [
    {
      title: "Task",
      description: "Create a new task",
      icon: FileText,
      onClick: handleTaskClick,
    },
    {
      title: "Reminder",
      description: "Create reminders with alerts",
      icon: Bell,
      onClick: handleReminderClick,
    },
    {
      title: "Note",
      description: "Capture ideas on the fly",
      icon: File,
      onClick: handleNoteClick,
    },
    {
      title: "Project",
      description: "Organise better with projects",
      icon: Folder,
      onClick: handleProjectClick,
    },
  ];

  return <DisclosableFab menuItems={menuItems} width={320} height={280} />;
}
