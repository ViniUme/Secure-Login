export default function Home() {
  return (
    <main>
        <section>

            {/* =======================
                    Login Form
                =======================
            */}
            <form action="#">
                <div>
                    <input type="text" placeholder="Email or Username" />
                </div>
                <div>
                    <input type="text" placeholder="Password" />
                </div>
            </form>
            <div>
                <h2>Log In</h2>
                <p>
                    Access your account to edit your profile data
                </p>
                <p>
                    You don't have an account ? Let's <button>create one</button>
                </p>
            </div>

            {/* =======================
                    Register Form
                =======================
            */}
            <form action="#">
                <div>
                    <input type="text" placeholder="Name" />
                </div>
                <div>
                    <input type="text" placeholder="Email" />
                </div>
                <div>
                    <input type="text" placeholder="Username" />
                </div>
                <div>
                    <input type="text" placeholder="Birth" />
                </div>
                <div>
                    <input type="text" placeholder="Password" />
                </div>
                <div>
                    <input type="text" placeholder="Confirm password" />
                </div>
            </form>
            <div>
                <h2>Register</h2>
                <p>
                    Create your account to login
                </p>
                <p>
                    Do you have an account ? Let's <button>log in</button>
                </p>
            </div>
        </section>
    </main>
  )
}
