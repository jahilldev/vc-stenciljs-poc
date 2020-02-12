import { Component, Host, h } from '@stencil/core';

/* -----------------------------------
 *
 * Redemption
 *
 * -------------------------------- */

@Component({
   tag: 'redemption-button',
   styleUrl: 'redemption-button.scss',
   shadow: true,
})
export class RedemptionButton {
   private onClick = (ev: Event) => {
      console.log('OH HAI', ev);
   };

   render() {
      return (
         <Host onClick={this.onClick}>
            <slot />
         </Host>
      );
   }
}
