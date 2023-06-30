// Q.8 Please explain the following code dealing with High Order Components that create abstraction.
// Higher Order Component which takes a component
// as input and returns another component
// "GlobalDataSource" is some global data source

function HOC(WrappedComponent, selectData) {
 return class extends React.Component {
   constructor(props) {
     super(props);
     this.handleChange = this.handleChange.bind(this);
     // Setting initial state using selectData function to retrieve data from GlobalDataSource
     this.state = {
       data: selectData(GlobalDataSource, props),
     };
   }
   componentDidMount() {
     // Listens to the changes in the global data source
     GlobalDataSource.addChangeListener(this.handleChange);
   }
   componentWillUnmount() {
     // Stop listening to changes in the global data source
     GlobalDataSource.removeChangeListener(this.handleChange);
   }
   handleChange() {
    // Update the component's state with the latest data from GlobalDataSource
     this.setState({
       data: selectData(GlobalDataSource, this.props),
     });
   }
   render() {
     // Rendering the wrapped component with the latest data data
     return <WrappedComponent data={this.state.data} {...this.props} />;
   }
 };
}
