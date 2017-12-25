import React, {Component} from 'react';
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar'

const styleLi = {
    width: '50%',
    height: '150px',
    background: 'grey',
    border: '1px solid green'
};

const styleUl = {
    height: '500px',
    overflowY: 'scroll'
}

const SortableItem = SortableElement(({value}) =>
    <li style={styleLi}>{value}</li>
);

const SortableList = SortableContainer(({items}) => {
    return (
        <PerfectScrollbar>
            <ul style={styleUl}>
                {items.map((value, index) => (
                    <SortableItem key={`item-${index}`} index={index} value={value} />
                ))}
            </ul>
        </PerfectScrollbar>
    );
});

class MainComponent extends Component {
    state = {
        items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 7', 'Item 8', 'Item 9', 'Item 10',
                'Item 11', 'Item 12', 'Item 13', 'Item 14', 'Item 15', 'Item 16', 'Item 17', 'Item 18', 'Item 19', 'Item 20'],
    };
    onSortEnd = ({oldIndex, newIndex}) => {
        this.setState({
            items: arrayMove(this.state.items, oldIndex, newIndex),
        });
    };
    render() {
        return <SortableList items={this.state.items} onSortEnd={this.onSortEnd} />;
    }
}

export default MainComponent;