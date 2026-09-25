const fs = require('fs');

const sidebarHeaderStr = fs.readFileSync('AdminSidebarHeader.txt', 'utf8');
const lines = sidebarHeaderStr.split('\n');
const aside = lines[0];
const header = lines[1];

let adminTsx = fs.readFileSync('src/routes/admin.tsx', 'utf8');

// The `admin.tsx` component returns `<div className="min-h-screen bg-gray-50 font-sans text-gray-900">...</div>`.
// We should replace everything inside the return of AdminLayout.

// I will just rewrite `src/routes/admin.tsx` completely based on what we need.
const newAdminTsx = `import { Outlet, Link } from "@tanstack/react-router";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/admin")({
  component: AdminLayout,
});

function AdminLayout() {
  return (
    <div className="bg-background font-body-md text-on-surface antialiased min-h-screen">
      ${aside}
      <div className="pl-72 flex flex-col min-h-screen">
        ${header}
        <Outlet />
      </div>
    </div>
  );
}
`;

fs.writeFileSync('src/routes/admin.tsx', newAdminTsx);
