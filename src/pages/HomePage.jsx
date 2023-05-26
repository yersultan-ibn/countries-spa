import { useNavigate, useParams } from "react-router-dom";

import { List } from "../components/List";
import { Card } from "../components/Card";
import { Controls } from "../components/Controls";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { ALL_COUNTRIES } from "../config";
import { useHistory } from "react-router-dom";

export const HomePage = () => {
  return (
    <>
      <Controls />
    </>
  );
};
