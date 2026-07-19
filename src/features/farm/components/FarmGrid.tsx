import * as React from "react";
import { useFarmStore } from "../store/farm-store";
import { FarmCard } from "./FarmCard";
import { Loader2, Plus } from "lucide-react";
import { FarmWizard } from "./FarmWizard";

export function FarmGrid() {
  const { farms, activeFarm, loading, activateFarm, deleteFarm } = useFarmStore();
  const [showWizard, setShowWizard] = React.useState(false);

  if (loading) {
    return (
      <div className="flex h-64 items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (showWizard || farms.length === 0) {
    return (
      <div>
        <div className="mb-6 flex items-center justify-between">
          <h2 className="font-serif text-2xl font-semibold text-foreground">Create New Farm</h2>
          {farms.length > 0 && (
            <button
              onClick={() => setShowWizard(false)}
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              Cancel
            </button>
          )}
        </div>
        <FarmWizard />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-serif text-2xl font-semibold text-foreground">Your Farms</h2>
          <p className="text-sm text-muted-foreground">Manage your farms and select the active one for operations.</p>
        </div>
        <button
          onClick={() => setShowWizard(true)}
          className="flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
        >
          <Plus className="h-4 w-4" />
          Add Farm
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {farms.map((farm) => (
          <FarmCard
            key={farm.id}
            farm={farm}
            onActivate={activateFarm}
            onDelete={deleteFarm}
          />
        ))}
      </div>
    </div>
  );
}
