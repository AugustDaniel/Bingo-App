export default async function action({request, params}) {
    console.log(params)
    const formData = await request.formData()
    console.log(formData.get("player-name"))
}