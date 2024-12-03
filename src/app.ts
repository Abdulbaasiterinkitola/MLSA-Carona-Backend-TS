import express from "express";

import {PORT} from "./config/env.ts";

import { Request, Response } from 'express-serve-static-core';

const app = express()

app.use(express.json())

app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
    
})