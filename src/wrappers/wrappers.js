import React from 'react';
import DataSource from '../components/data/datasource'
import ItemList from '../components/items/itemList'
import ColorList from '../components/color/colorList'

export const ItemListWithSub = withSubscription(
    ItemList,
    (DataSource) => DataSource.getItems()
)

export const ColorListWithSub = withSubscription(
    ColorList,
    (DataSource) => DataSource.getColors()
)

export default {};

export function withSubscription(WrappedComponent, selectData) {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.handleChange = this.handleChange.bind(this);
            this.state = {
                data: selectData(DataSource, props)
            }
        }

        componentWillMount() {
            DataSource.subscribe(this.handleChange);
        }

        componentWillUnmount() {
            DataSource.unsubscribe(this.handleChange);
        }

        handleChange() {
            this.setState({
                data: selectData(DataSource, this.props)
            })
        }

        render() {
            return <WrappedComponent data={this.state.data} {...this.props} />
        }
    }
}
