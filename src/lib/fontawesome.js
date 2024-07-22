// src/lib/fontawesome.js
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

// Prevent FontAwesome from adding its CSS since we did it manually above
config.autoAddCss = false;
