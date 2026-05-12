import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { MetricsService } from './metrics.service';
import { CreateMetricDto } from './dto/create-metric.dto';
import { UpdateMetricDto } from './dto/update-metric.dto';
import { EngagementQueryDto } from './dto/EngagementQueryDto';
import { CpmQueryDto } from './dto/CpmQueryDto';

@Controller('metrics')
export class MetricsController {
  constructor(private readonly metricsService: MetricsService) {}

  @Post()
  create(@Body() createMetricDto: CreateMetricDto) {
    return this.metricsService.create(createMetricDto);
  }

  @Get('engagement')
  findEngagement(@Query() engagementQueryDto: EngagementQueryDto) {
    return this.metricsService.findEngagement(engagementQueryDto);
  }

  @Get('cpm')
  findCMP(@Query() cpmQueryDto: CpmQueryDto) {
      return this.metricsService.findCMP(cpmQueryDto);
  }

  @Get()
  findAll() {
    return this.metricsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.metricsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMetricDto: UpdateMetricDto) {
    return this.metricsService.update(+id, updateMetricDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.metricsService.remove(+id);
  }
}
