export const actions = {
    login: async ({ cookies, request }) => {
        const data = await request.formData()
        var mail = data.get('email')
        var pw = data.get('password')
        if (mail == "tomuwhu@gmail.com" && pw == '1234') {
            cookies.set('user', mail, { path: '/' })
            return { user: mail }
        } else return { user: 'logged_out' }
    },
    logout: async ({ cookies }) => {
        cookies.delete('user', { path: '/' })
        return { user: 'logged_out' }
    }
}
export function load(event) {
    var user = event.cookies.get('user')
    const answer = { user }
    return answer
}