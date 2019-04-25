<template>
  <section>
    <div>
      <kendo-editor @change="() => {console.log('fire')}" :value="value" style="height:500px" :pdf="pdf" :tools="tools">
      </kendo-editor>
    </div>
  </section>
</template>

<script>
import { Editor } from "@progress/kendo-editor-vue-wrapper";

export default {
  name: "Editor",
  data() {
    return {
      value: `The Kendo UI Editor allows your users to edit HTML in a familiar, user-friendly way.
In this version, the Editor provides the core HTML editing engine, which includes basic text formatting, hyperlinks, lists, and image handling. The widget outputs identical HTML across all major browsers, follows accessibility standards, and provides API for content manipulation.

Features include:

Text formatting & alignment
Bulleted and numbered lists
Hyperlink and image dialogs
Cross-browser support
Identical HTML output across browsers
Gracefully degrades to a textarea when JavaScript is turned off`,
      tools: ['format','bold', 'italic', 'underline', 'strikethrough', 'insertFile','insertImage','insertOrderedList', 'insertUnorderedList','createLink','indent', 'pdf'],
      pdf: {
        fileName: "editor.pdf",
        proxyURL: "https://demos.telerik.com/kendo-ui/service/export",
        paperSize: "a4",
        margin: {
          bottom: 20,
          left: 20,
          right: 20,
          top: 20
        }
      }
    };
  },
  methods: {
    valueChange(e) {
      this.value = e;
    }
  }
};
</script>

<style lang="scss" scoped>
section {
  width: 90%;
  margin: 5% auto 0;
  display: flex;
}
</style>
