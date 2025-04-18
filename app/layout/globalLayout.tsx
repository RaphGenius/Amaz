import React from 'react'
import { Form, Link, Outlet, useFetcher, useSubmit } from 'react-router'
import type { Route } from '../+types/root'

export async function action({ request }: Route.ActionArgs) {

}
export async function loader({ request, context, params }: Route.LoaderArgs) {
    console.log("igi")
}

function GlobalLayout() {


    return (
        <div className='flex flex-col h-screen' >
            <header className='bg-primary opacity-[97%]  text-primary-foreground p-2 sticky top-0 shadow shadow-white'>
                <div className='max-w-6xl mx-auto flex gap-4 items-center w-full '>
                    <Link className='' to={'/'}><h1>Amaz</h1></Link>
                    <button>Liste de page </button>
                    <Form method='get' className='bg-white text-black placeholder:text-black border-none rounded-full w-full ' >

                        <input type="search" placeholder='recherche' name="" id="" className='w-full p-2 px-6 outline-none' />
                    </Form>

                    <button>🚗</button>
                    <button>🤵</button>

                </div>
            </header>

            <main className='my-4'>
                <Outlet />
            </main>

            <footer className='h-20 bg-primary mt-auto' id='footer'>
                az
            </footer>
        </div>
    )
}

export default GlobalLayout