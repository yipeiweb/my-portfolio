export default (project) => {
    return `
    <div class="col-md-6  mb-2" >
        <div class="card">
            <img class="card-img-top" src="${project.imageUrl}" alt="${project.title}">
            <div class="card-body bg-dark text-white-50">
                <h5 class="card-title">${project.title}</h5>
                <p class="card-text">${project.description}</p>
                <a href="${project.webUrl}" target="_blank"
                class="btn btn-light mr-2 ${!project.webUrl ? 'd-none' : ''}"
                >Ver el proyecto</a>
            </div>
        </div> 
    </div>   
    `;
}