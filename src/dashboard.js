import { buildDashboard } from "./build_dashboard.js";

export const dashboard = document.createElement("div");
dashboard.className = "dashboard";
buildDashboard(dashboard);