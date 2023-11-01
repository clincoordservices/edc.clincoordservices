"use client";
import Link from "next/link";
import { useState } from "react";

const SidebarItems = () => {
    const [items, setItems] = useState([
        {
          name: "Manage Users",
          href: "/dashboard/admin/users",
        },
        {
          name: "Settings",
          href: "/dashboard/admin/settings",
        },
        {
          name: "User sessions",
          href: "/dashboard/admin/sessions",
        },
        {
          name: "Item 2",
          href: "/Item2",
        },
        {
          name: "Item 3",
          href: "/Item3a",
        },
        {
          name: "Item 4",
          href: "/Item4",
        },
        {
          name: "Item 5",
          href: "/Item5",
        },
        {
          name: "Item 6",
          href: "/Item6",
        },
        {
          name: "Item 7",
          href: "/Item7",
        },
        {
          name: "Item 3",
          href: "/Item31",
        },
        {
          name: "Item 4",
          href: "/Item42",
        },
        {
          name: "Item 5",
          href: "/Item5",
        },
        {
          name: "Item 6",
          href: "/Item6",
        },
        {
          name: "Item 7",
          href: "/Item10",
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