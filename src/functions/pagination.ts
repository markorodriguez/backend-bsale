const pagination = (value:Array<any>, page:number) => {

        const pagePagination = page
        const limitPagination = 8

        //Definir los límites para la paginación
        const startIndex = (pagePagination - 1) * limitPagination

        const endIndex = pagePagination * limitPagination

        const results:any = {}

        if( endIndex < value.length){
            results.next = {
                page: page + 1,
                limit: limitPagination
            }
        }
        
        if(startIndex > 0){
            results.previous = {
                page:page - 1,
                limit: limitPagination
            }
        }
        console.log(value.length, 'val length')
        if(value.length == 0 || value.length == undefined){
            results.numberPages = 0
        }else{
            results.numberPages = value.length < limitPagination ? 1 : Math.round(value.length/limitPagination)
        }
        console.log(results, 'results')
        results.results = value.slice(startIndex, endIndex)

    return({results})
}

export default pagination