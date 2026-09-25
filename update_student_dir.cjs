const fs = require('fs');

const mainContentStr = fs.readFileSync('AdminMainContent.txt', 'utf8');

let studentDirTsx = `import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/admin/student-directory-records")({
  component: StudentDirectoryRecords,
});

function StudentDirectoryRecords() {
  return (
    ${mainContentStr}
  );
}
`;

// There is a slight mismatch because the route is actually "/admin/student-directory" based on the href data-path in the HTML, but my file is "student-directory-records.lazy.tsx". The generator handles it. The path is "/admin/student-directory-records". Let's update `AdminSidebarHeader.txt` to point there or just leave it. The user said `data-path="student-directory"`. Let's just fix the route path string in the generator or the file name if needed.
// Wait, the file is `src/routes/admin/student-directory-records.lazy.tsx`

fs.writeFileSync('src/routes/admin/student-directory-records.lazy.tsx', studentDirTsx);
