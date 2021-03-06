class MensagemView extends View {

    template (model){
        if(!model.titulo || !model.texto){
            return `<div></div>`;
        }
        return `
        <div class="alert alert-success alert-dismissible" role="alert">
            <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <strong>${model.titulo}</strong> ${model.texto}
        </div>`
    }
}