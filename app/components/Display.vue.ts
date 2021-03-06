import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { Inject } from '../util/injector';
import { Display as ObsDisplay, VideoService } from '../services/video';

@Component({})
export default class Display extends Vue {

  @Inject() videoService: VideoService;

  @Prop({ default: true }) drawUI: boolean;

  obsDisplay: ObsDisplay;

  $refs: {
    display: HTMLDivElement;
  };

  mounted() {
    this.obsDisplay = this.videoService.createDisplay();
    this.obsDisplay.onOutputResize(outputRegion => this.$emit('outputResize', outputRegion));
    this.obsDisplay.trackElement(this.$refs.display);
    this.obsDisplay.setShoulddrawUI(this.drawUI);
  }

  beforeDestroy() {
    this.obsDisplay.destroy();
  }

}
