define([
    'create-react-class'
], function(createReactClass) {
    'use strict';

    const UrlConfig = createReactClass({

        getInitialState() {
            return { url: '' };
        },

        render() {
            const { url } = this.state;
            return (
                <div>
                    <input type="text"
                        onChange={this.onChange}
                        placeholder={i18n('org.visallo.examples.ingest_cloud.placeholder')}
                        value={url}/>
                    <button
                        style={{display: 'block'}}
                        disabled={this.isUrlInvalid()}
                        onClick={this.onImport}
                        className="btn btn-primary">{i18n('org.visallo.examples.ingest_cloud.button')}</button>
                </div>
            )
        },

        isUrlInvalid() {
            const { url } = this.state;
            return !(/^https?:\/\/.+$/).test(url);
        },

        onChange(e) {
            this.setState({ url: e.target.value })
        },

        onImport() {
            const { url } = this.state;
            this.props.onImport({ paths: [url] });
        }
    });

    return UrlConfig;
});
