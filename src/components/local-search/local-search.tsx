import { Component, Prop, h, getAssetPath, State } from '@stencil/core';

@Component({
  tag: 'local-search',
  styleUrl: 'local-search.scss',
  assetsDirs: ['assets'],
  shadow: true
})
export class LocalSearch {
  /**
   * Main title text
   */
  @Prop() titleText: string;

  /**
   * Map link text
   */
  @Prop() linkText: string;

  /**
   * Map URL
   */
  @Prop() mapUrl: string;

  /**
   * Internal input state
   */
  @State() searchValue: string;

  private onKeyUp = ({ target }) => {
    this.searchValue = target.value;
  }

  private onSubmit = (ev) => {
    ev.preventDefault();

    console.log('submit', this.searchValue);
  }

  render() {
    return (
      <div class="wrapper">
        <div class="content">
          <h3 class="title">{this.titleText}</h3>
          <form class="form" method="POST" onSubmit={this.onSubmit}>
            <input class="input" type="text" onKeyUp={this.onKeyUp} />
            <button class="button ">Show Offers</button>
          </form>
          <a href={this.mapUrl} class="link" target="_blank">{this.linkText}</a>
        </div>
        <img class="image" src={getAssetPath('./assets/map.png')} />
      </div>
    );
  }
}
