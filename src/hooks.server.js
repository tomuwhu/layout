export async function handle({ event, resolve }) {
    event.locals.user = event.cookies.get('user')
    return resolve(event)
}