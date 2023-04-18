export default (project) => {
    return `
    <div class="col-md-6  mb-2" >
        <div class="card">
            <img class="card-img-top" src="${project.imageUrl}" alt="${project.title}"
                style="height: 250px">
            <div class="card-body bg-dark text-white-50">
                <h5 class="card-title">${project.title}</h5>
                <p class="card-text">${project.description}</p>
                <p class="card-text"><b>${project.useTechnologies}</b></p>
                <div class="d-flex flex-column">
                    <a href="${project.webUrl}" 
                    class="btn btn-info ${!project.webUrl ? 'd-none' : ''}" 
                    target="_blank">Ver el proyecto</a>
                    <p class="mb-2"></p>
                    <a href="${project.repositoryUrl}" 
                    class="btn btn-light ${!project.repositoryUrl ? 'd-none' : ''}" 
                    target="_blank">Ver el codigo fuente</a> 
                </div>
            </div>
        </div> 
    </div>   
    `;
}