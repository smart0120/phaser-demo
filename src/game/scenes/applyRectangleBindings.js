import {ClickCondition} from "@/dtos";
import {store} from "@/store";

export default function ApplyRectangleBindings(SpotConditions) {
    ClickCondition.prototype.applyRectangleRule = function (rectangle, pointer, name, rectangleId) {

        return true; // click always passes because hitbox is managed by phaser
    }
    ClickCondition.prototype.applyRectangleInventoryRule = function (rectangle, pointer, name, rectangleId) {
        debugger
        const annoy_tokens = store.getters.GetInventory(this.inventoryId)
        if (!(annoy_tokens.item_stats.itemCount >= this.inventoryCountBetweenLower)) {
            return this.not; //if not then return true because falsee
        }
        //we know the number is greater or equal to the minimum
        if (!(this.inventoryCountBetweenUpper >= this.inventoryCountBetweenLower)) {
            //we know there is an upper bound
            if (!(annoy_tokens.item_stats.itemCount < this.inventoryCountBetweenUpper)) {
                return this.not; //it's greater than the exclusive upper bound so return not
            }
        }
        return true;

        // if (annoy_tokens.item_stats.itemCount >= this.inventoryCountBetweenLower) {
        //     if (this.inventoryCountBetweenLower < this.inventoryCountBetweenUpper)
        //         if (this.characters[GroupName]['Jacklyn_naked1_bottom1'].visible) {
        //             this.characters[GroupName]['Jacklyn_naked1_bottom1'].visible = false;
        //             store.commit('IncreaseInventory', {itemId: 3, amount: 1}) //got panty
        //         }
        // }
        // if (annoy_tokens.item_stats.itemCount >= 0 && annoy_tokens.item_stats.itemCount <= 5) {
        //     store.commit('IncreaseInventory', {itemId: 1, amount: 1}) //panty attempt
        // }
    }
    for (let spotConditionsKey in SpotConditions) {
        for (let condition of SpotConditions[spotConditionsKey].click) {
            condition.applyRule = ClickCondition.prototype.applyRectangleInventoryRule.bind(condition);
        }
        for (let condition of SpotConditions[spotConditionsKey].inventoryClick) {
            condition.applyRule = ClickCondition.prototype.applyRectangleRule.bind(condition);
        }
    }
}
