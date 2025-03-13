"use client";

import { Grid } from "@mui/material";

import type { ModuleList } from "@/@types/modules";

import { ModuleCard } from "./module-card";

interface ModuleGridProps {
  modules: ModuleList;
}

export const ModuleGrid = ({ modules }: ModuleGridProps) => {
  return (
    <Grid container spacing={3}>
      {modules.map((module) => (
        <Grid item xs={6} key={module.id}>
          <ModuleCard
            id={module.id}
            title={module.title}
            description={module.description}
            image={module.image || "/placeholder.svg"}
          />
        </Grid>
      ))}
    </Grid>
  );
};
