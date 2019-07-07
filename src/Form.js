import React, { Fragment } from "react";
class FlavorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      check: false,
      category: "category1",
      productName: ""
    };

  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }


  handleSubmit = (event) => {
    console.log('Вибрана назва товару: ' + this.state.productName);
    console.log('Вибрана категорія: ' + this.state.category);
    console.log('Терміново? ' + this.state.check);
    event.preventDefault();
  }


  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label >
            Назва товару
          <br></br>
            <input name="productName" type="text" value={this.state.productName} onChange={this.handleChange} />
            <br></br>
            Категорія товару
            <br></br>
            <select name="category" value={this.state.category} onChange={this.handleChange}>
              <option value="category1">Категорія 1</option>
              <option value="category2">Категорія 2</option>
              <option value="category3">Категорія 3</option>
            </select>
            <br></br>
            <br></br>
            <br></br>
            <input name="check"
              onChange={this.handleChange}
              type="checkbox"
              checked={this.state.check} />
            Терміново
        </label>
          <br></br>
          <input type="submit" value="Відправити" />
        </form>
      </div>
    );
  }
}
export default FlavorForm;