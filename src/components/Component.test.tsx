import { Component } from "./Component";
import { expect, test, describe, it, beforeAll, afterEach, afterAll, } from 'vitest'
import { screen, render, waitFor } from "@testing-library/react";
import { setupServer } from 'msw/node'
import { http, HttpResponse } from 'msw'

const server = setupServer(
    http.get('/hello', () => {
        return HttpResponse.json({ greeting: 'hello there' })
    }),
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())


describe(Component, () => {

    it("does the things", async () => {


        console.log(fetch)
        render(<Component />);

        expect(screen.getByText("hello world!")).toBeInTheDocument();


        expect(screen.getByText("foo")).toBeInTheDocument();

        expect(await screen.findByText("hello there")).toBeInTheDocument();
    })
})