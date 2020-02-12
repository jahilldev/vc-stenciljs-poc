import { Component, Prop, Event, EventEmitter, Host, h } from '@stencil/core';

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
   @Prop() offerId: number;
   @Prop() redirectUrl?: string;
   @Prop() modalUrl?: string;

   @Event({ eventName: 'onRedemption' })
   onRedemption: EventEmitter;

   private onClick = () => {
      const { offerId } = this;
      // TRIGGER MODAL / REDIRECT

      this.onRedemption.emit({ offerId });
   };

   render() {
      return (
         <Host onClick={this.onClick}>
            <slot />
         </Host>
      );
   }
}
