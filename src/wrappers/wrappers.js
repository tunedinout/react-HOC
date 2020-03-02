import React from 'react';
import DataSource from '../components/data/datasource'
import ItemList from '../components/items/itemList'
import ColorList from '../components/color/colorList'

//define at one place all the logic for getting part of the global state
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
                data: selectData(DataSource)
            }

            // console.log('Data source', DataSource);
            // console.log('props', props);
            // console.log(selectData(DataSource, props));
            // console.log('----------------');
        }

        componentDidMount() {
            DataSource.subscribe(this.handleChange);
        }

        componentWillUnmount() {
            DataSource.unsubscribe(this.handleChange);
        }

        handleChange() {
            this.setState({
                data: selectData(DataSource)
            })
        }

        render() {
            return <WrappedComponent data={this.state.data} {...this.props} />
        }
    }
}
