import signUpUser from "./4-user-promise"
import uploadPhoto from "./5-photo-reject"

export default function handleProfileSignup(firstName, lastName, fileName){
    const results = []
    return Promise.all([signUpUser(), uploadPhoto()])
    .then(data => {
        data.forEach(element => {
            results.push({
                status: 'fulfilled',
                value: `${element}`
            });
        });
        return results;
    })
    .catch(error => {
        results.push({
            status: 'rejected',
            value: `${error}`
        });
        return results;
    });
}