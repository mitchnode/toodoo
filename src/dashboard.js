import { buildDashboard } from "./build_dashboard.js";
import { toodoo_store } from "./toodoo_store.js";

export const dashboard = document.createElement("div");
dashboard.className = "dashboard";
buildDashboard(dashboard);