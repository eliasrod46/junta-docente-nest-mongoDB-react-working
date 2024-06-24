import { Routes, Route } from "react-router-dom";
import { Dashboard } from "./Dashboard";

import { TeacherRoutesList } from "./teachers/routes/TeacherRoutesList";
import { EntryTeachersRoutesList } from "./entryTeachers/routes/EntryTeachersRoutesList";

import { TeachersProvider } from "./teachers/contexts/TeachersContext";
import { ShiftsProvider } from "./entryTeachers/contexts/ShiftsContext";
import { TitlesProvider } from "./entryTeachers/contexts/TitlesContext";

function IndexJunta() {
  return (
    <Routes>
      <Route path="/junta/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export function JuntaRoutesList() {
  return (
    <TeachersProvider>
      <ShiftsProvider>
        <TitlesProvider>
          {/* IndexJunta routes */}
          <IndexJunta />
          {/* teacher routes */}
          <TeacherRoutesList />
          {/* entryTteachers routes */}
          <EntryTeachersRoutesList />
        </TitlesProvider>
      </ShiftsProvider>
    </TeachersProvider>
  );
}
