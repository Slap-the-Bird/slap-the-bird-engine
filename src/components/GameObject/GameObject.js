import React from 'react';

import BoxCollider from '../../classes/BoxCollider/BoxCollider';


export default class GameObject extends React.Component
{
  state = {};
  health = 0;
  boxCollider = new BoxCollider();
  lambda = (self) => <>{this.props.children}</>;

  constructor(props)
  {
    super(props);

    if (this.props == null)
    {
      return;
    }

    if (this.props.health)
    {
      this.health = this.props.health;
    }

    if (this.props.boxCollider)
    {
      this.boxCollider = this.props.boxCollider;
    }

    if (this.props.lambda)
    {
      this.lambda = this.props.lambda;
    }
  }

  componentDidMount()
  {
    this.props.data.children.push(this.setState.bind(this));
  }

  renderHook()
  {
    return this.lambda(this);
  }

  render()
  {
    return (
      <>
        {this.renderHook()}
      </>
    );
  }
}