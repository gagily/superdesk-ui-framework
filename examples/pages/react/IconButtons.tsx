import * as React from 'react';

import * as Markup from '../../js/react';

import { IconButton } from '../../../app-typescript';

export default class IconButtonDoc extends React.Component {
    render() {
        return (
            <section className="docs-page__container">
                <h2 className="docs-page__h2">Plain icon button</h2>
                <p className="docs-page__paragraph ng-scope">Tooltip can be set with defining text of tooltip prop, also it can be defined placment of tooltip with prop flow.</p>
                <Markup.ReactMarkupCodePreview>{`
                    <IconButton icon='close-small'/>
                `}
                </Markup.ReactMarkupCodePreview>
                <Markup.ReactMarkup>
                    <Markup.ReactMarkupPreview>
                        <IconButton icon='close-small' tooltip={{text:'I support tooltips!'}} onClick = { ()=> false}/>
                        <IconButton icon='plus-large' onClick = { ()=> false}/>
                        <IconButton icon='dots-vertical' onClick = { ()=> false}/>
                        <IconButton icon='trash' onClick = { ()=> false}/>
                        <IconButton icon='close-small' tooltip={{text:'My tooltip is on right.', flow:'right'}} onClick = { ()=> false}/>
                        <p className="docs-page__paragraph">// Dark UI</p>
                        <div className="docs-page__content-row docs-page__content-row--ui-dark" style={{color:'white'}}>
                            <IconButton icon='close-small' tooltip={{text:'I support tooltips!'}} onClick = { ()=> false}/>
                            <IconButton icon='plus-large' onClick = { ()=> false}/>
                            <IconButton icon='dots-vertical' onClick = { ()=> false}/>
                            <IconButton icon='trash' onClick = { ()=> false}/>
                            <IconButton icon='close-small' tooltip={{text:'My tooltip is on right.', flow:'right'}} onClick = { ()=> false}/>
                        </div> 
                    </Markup.ReactMarkupPreview>
                    <Markup.ReactMarkupCode>{`
                        <IconButton icon='close-small' tooltip="{{text:'I support tooltips!'}}"/>
                        <IconButton icon='plus-large'/>
                        <IconButton icon='dots-vertical'/>
                        <IconButton icon='trash'/>
                        <IconButton icon='close-small' tooltip="{{text:'My tooltip is on right.', flow:'right'}}"/>

                        //Dark UI
                        <IconButton icon='close-small' tooltip="{{text:'I support tooltips!'}}"/>
                        <IconButton icon='plus-large'/>
                        <IconButton icon='dots-vertical'/>
                        <IconButton icon='trash'/>
                        <IconButton icon='close-small' tooltip="{{text:'My tooltip is on right.', flow:'right'}}"/>
                    `}
                    </Markup.ReactMarkupCode>
                </Markup.ReactMarkup>
            </section>
        )
    }
}
