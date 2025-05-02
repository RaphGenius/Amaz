import { useState } from 'react'
import { Form, Link, Outlet, useLocation, useSubmit } from 'react-router'
import type { Route } from '../+types/root'


export async function action() {
    console.log("action global")
}

export async function loader({ request, context, params }: Route.LoaderArgs) {
    console.log("loader global")
}

function GlobalLayout({ }: Route.ComponentProps) {
    const location = useLocation()
    const searchParams = new URLSearchParams(location.search).get("search")
    const [search, setSearch] = useState(searchParams ?? "")
    return (
        <div className='flex flex-col h-screen' >
            <header className='bg-primary opacity-[97%]  text-primary-foreground p-2 sticky top-0 shadow shadow-white'>
                <div className='max-w-6xl mx-auto flex gap-4 items-center w-full '>
                    <Link className='' to={'/'}><h1>Amaz</h1></Link>
                    <button>Liste de page </button>
                    <Form method='post' action={`/products?search=${search}`} className='bg-white text-black placeholder:text-black border-none rounded-full w-full ' >

                        <input value={search} onChange={e => {
                            setSearch(e.target.value);

                        }} type="search" placeholder='recherche' name="" id="" className='w-full p-2 px-6 outline-none' />
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