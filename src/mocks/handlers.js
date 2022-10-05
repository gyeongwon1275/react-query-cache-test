import { rest } from "msw";
import { ANIMAL_URL, BASE_URL, STOCK_URL } from "../api";
import {
  getStocksResponse,
  getAnimalsResponse,
  ANIMAL_TYPE,
  STOCK_TYPE,
} from "./factories";

export const handlers = [
  rest.get(`${BASE_URL}${ANIMAL_URL}`, (req, res, ctx) =>
    res.once(
      ctx.delay(500),
      ctx.status(200),
      ctx.json(getAnimalsResponse(ANIMAL_TYPE.dog))
    )
  ),
  rest.get(`${BASE_URL}${ANIMAL_URL}`, (req, res, ctx) =>
    res.once(
      ctx.delay(500),
      ctx.status(200),
      ctx.json(getAnimalsResponse(ANIMAL_TYPE.cat))
    )
  ),
  rest.get(`${BASE_URL}${ANIMAL_URL}`, (req, res, ctx) =>
    res.once(
      ctx.delay(500),
      ctx.status(200),
      ctx.json(getAnimalsResponse(ANIMAL_TYPE.horse))
    )
  ),
  rest.get(`${BASE_URL}${ANIMAL_URL}`, (req, res, ctx) =>
    res(
      ctx.delay(500),
      ctx.status(200),
      ctx.json(getAnimalsResponse(ANIMAL_TYPE.dog))
    )
  ),

  rest.get(`${BASE_URL}${STOCK_URL}`, (req, res, ctx) =>
    res.once(
      ctx.delay(500),
      ctx.status(200),
      ctx.json(getStocksResponse(STOCK_TYPE.samsung))
    )
  ),

  rest.get(`${BASE_URL}${STOCK_URL}`, (req, res, ctx) =>
    res.once(
      ctx.delay(500),
      ctx.status(200),
      ctx.json(getStocksResponse(STOCK_TYPE.hyundai))
    )
  ),

  rest.get(`${BASE_URL}${STOCK_URL}`, (req, res, ctx) =>
    res.once(
      ctx.delay(500),
      ctx.status(200),
      ctx.json(getStocksResponse(STOCK_TYPE.usa))
    )
  ),

  rest.get(`${BASE_URL}${STOCK_URL}`, (req, res, ctx) =>
    res(
      ctx.delay(500),
      ctx.status(200),
      ctx.json(getStocksResponse(STOCK_TYPE.samsung))
    )
  ),
];
