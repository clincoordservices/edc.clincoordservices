import Link from "next/link";
import { useState } from "react";

const SidebarItems = () => {
    const [items, setItems] = useState([
        {
          name: "Users",
          href: "/dashboard/admin/users",
        },
        {
          name: "Settings",
          href: "/dashboard/admin/settings",
        },
        {
          name: "Drafts",
          href: "/drafts",
        },
        {
          name: "Spam",
          href: "/spam",
        },
        {
          name: "Trash",
          href: "/trash",
        },
      ]);
    
      return (
        <ul>
          {items.map((item) => (
            <li key={item.name}>
              <Link href={item.href}>{item.name}</Link>
            </li>
          ))}
        </ul>
      );
  };

  export default SidebarItems;