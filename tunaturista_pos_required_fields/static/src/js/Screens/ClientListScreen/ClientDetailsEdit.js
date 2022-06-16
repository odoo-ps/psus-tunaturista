odoo.define(
  "tunaturista_pos_required_fields.ClientDetailsEdit",
  function (require) {
    "use strict";
    const Registries = require("point_of_sale.Registries");
    const { _t } = require("web.core");
    const ClientDetailsEdit = require("point_of_sale.ClientDetailsEdit");

    const ClientDetailsEditExtend = (ClientDetailsEdit) =>
      class extends ClientDetailsEdit {
        saveChanges() {
          let processedChanges = {};

          for (let [key, value] of Object.entries(this.changes)) {
            if (this.intFields.includes(key)) {
              processedChanges[key] = parseInt(value) || false;
            } else {
              processedChanges[key] = value;
            }
          }

          if (
            (!this.props.partner.barcode && !processedChanges.barcode) ||
            processedChanges.barcode === ""
          ) {
            return this.showPopup("ErrorPopup", {
              title: _t("A Barcode Is Required"),
            });
          }

          if (
            (!this.props.partner.email && !processedChanges.email) ||
            processedChanges.email === ""
          ) {
            return this.showPopup("ErrorPopup", {
              title: _t("An E-mail Is Required"),
            });
          }

          if (
            (!this.props.partner.name && !processedChanges.name) ||
            processedChanges.name === ""
          ) {
            return this.showPopup("ErrorPopup", {
              title: _t("A Customer Name Is Required"),
            });
          }
          processedChanges.id = this.props.partner.id || false;
          this.trigger("save-changes", { processedChanges });
        }
      };
    Registries.Component.extend(ClientDetailsEdit, ClientDetailsEditExtend);
    return ClientDetailsEdit;
  }
);
