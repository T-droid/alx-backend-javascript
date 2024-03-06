export default function loadBalancer(chinaDownload, USDownload) {
    return Promise.race([chinaDownload, USDownload])
    .then(data => {
        return(data);
    })
    .catch(error => {
        return error;
    });
}