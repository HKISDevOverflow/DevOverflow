import { Auth, ThemeSupa } from '@supabase/auth-ui-react'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import style from "../styles/login.module.css"

export default function Login() {
  const session = useSession()
  const supabase = useSupabaseClient()

  return (
    <div className=''>
      <div className={style["container"]} style={{ padding: '50px 0 100px 0' }}>
        {!session ? (
          <div className={style.contain}>
              <h1 className={style.title}>Login to DevOverflow</h1>
              <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} 
              // providers={[]}
              theme="dark" />
          </div>
        ) : (
          <p>Account page will go here.</p>
        )}
      </div>
    </div>
  )
}
