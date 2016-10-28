import View from './View';

class LoaderView extends View {

    constructor(elemento) {

        super(elemento);
    }

    template(model) {
        return `
                <div class="loader">
                        <div class="preloader-wrapper big active">
                            <div class="spinner-layer spinner-blue-only">
                                <div class="circle-clipper left">
                                    <div class="circle"></div>
                                </div>
                                <div class="gap-patch">
                                    <div class="circle"></div>
                                </div>
                                <div class="circle-clipper right">
                                    <div class="circle"></div>
                                </div>
                            </div>
                        </div>
                    </div>
            `
    }
}

export default LoaderView;