export default (project) => {
    return `
    <div class="col-md-6  mb-2" >
        <div class="card">
            <img class="card-img-top" src="${project.imageUrl}" alt="${project.title}"
                style="height: 250px">
            <div class="card-body">
                <h5 class="card-title">${project.title}</h5>
                <p class="card-text">${project.description}</p>
                <p class="card-text"><b>${project.useTechnologies}</b></p>
                <a href="${project.webUrl}" 
                    class="btn btn-primary mr-2 ${!project.webUrl ? 'd-none' : ''}" 
                    target="_blank">Ver el proyecto</a>
                <a href="${project.repositoryUrl}" 
                    class="btn btn-primary ${!project.repositoryUrl ? 'd-none' : ''}" 
                    target="_blank">Ver el codigo fuente</a>
            </div>
        </div> 
    </div>   
    `;
}