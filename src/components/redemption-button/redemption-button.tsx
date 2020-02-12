import { Component, Prop, Host, h } from '@stencil/core';

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
   /**
    * Url to use for redirect
    */
   @Prop() redirectUrl?: string;

   /**
    * Modal url for redemption
    */
   @Prop() modalUrl?: string;

   private onClick = () => {
      console.log('OH HAI', this.redirectUrl);
   };

   render() {
      return (
         <Host onClick={this.onClick}>
            <slot />
         </Host>
      );
   }
}
