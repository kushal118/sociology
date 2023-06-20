import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan"
import path from "path";
import { fileURLToPath } from "url";

/* CONFIGURATIONS*/
const __